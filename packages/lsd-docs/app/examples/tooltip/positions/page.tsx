'use client';

import { Button, Tooltip, TooltipContent, TooltipTrigger, Typography } from '@nipsys/lsd';
import { TooltipProvider } from './TooltipProvider';

export const SIZE = 'md';

/**
 * @docSection feature
 */
export const CODE = `import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) size-full items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outlined">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <Typography variant="body2">Tooltip on top</Typography>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outlined">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <Typography variant="body2">Tooltip on bottom</Typography>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outlined">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <Typography variant="body2">Tooltip on left</Typography>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outlined">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <Typography variant="body2">Tooltip on right</Typography>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}`;

export function TooltipPositionsExample() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) size-full items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outlined">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <Typography variant="body2">Tooltip on top</Typography>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outlined">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <Typography variant="body2">Tooltip on bottom</Typography>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outlined">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <Typography variant="body2">Tooltip on left</Typography>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outlined">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <Typography variant="body2">Tooltip on right</Typography>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default function Positions() {
  return <TooltipPositionsExample />;
}
