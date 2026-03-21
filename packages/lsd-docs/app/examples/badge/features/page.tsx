'use client';

import { Badge } from '@nipsys/shadcn-lsd';
import { CheckIcon, InfoIcon, WarningIcon } from '@phosphor-icons/react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Badge } from '@nipsys/shadcn-lsd';
import { CheckIcon, InfoIcon, WarningIcon } from '@phosphor-icons/react';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge icon={<CheckIcon />} variant="success">
        Verified
      </Badge>
      <Badge icon={<WarningIcon weight="duotone" />} variant="warning">
        Warning
      </Badge>
      <Badge icon={<InfoIcon weight="duotone" />} variant="info" iconPosition="right">
        Info
      </Badge>
    </div>
  );
}`;

export function BadgeFeaturesExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge icon={<CheckIcon />} variant="success">
        Verified
      </Badge>
      <Badge icon={<WarningIcon weight="duotone" />} variant="warning">
        Warning
      </Badge>
      <Badge icon={<InfoIcon weight="duotone" />} variant="info" iconPosition="right">
        Info
      </Badge>
    </div>
  );
}

export default function Features() {
  return <BadgeFeaturesExample />;
}
