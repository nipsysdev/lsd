'use client';

import { Button, Tooltip, TooltipContent, TooltipTrigger, Typography } from '@nipsys/shadcn-lsd';
import { InfoIcon } from '@phosphor-icons/react';
import { TooltipProvider } from './TooltipProvider';

export const CODE = `import { InfoIcon } from '@phosphor-icons/react';
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Basic Tooltip</Typography>
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

      <Typography variant="label1">With Icon</Typography>
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

      <Typography variant="label1">Different Positions</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
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
    </div>
  );
}`;

export function TooltipExample() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Basic Tooltip</Typography>
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

      <Typography variant="label1">With Icon</Typography>
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

      <Typography variant="label1">Different Positions</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
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
    </div>
  );
}

export default function TooltipPage() {
  return <TooltipExample />;
}
