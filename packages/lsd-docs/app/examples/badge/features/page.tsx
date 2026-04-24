'use client';

import { Badge } from '@nipsys/lsd';
import { CheckIcon, InfoIcon, WarningIcon } from '@phosphor-icons/react';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';

export const SIZE = 'sm';

/** @docSection feature */
export const CODE = `import { Badge } from '@nipsys/lsd';
import { CheckIcon, InfoIcon, WarningIcon } from '@phosphor-icons/react';

function BadgeFeaturesExample() {
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

export default function Example() {
  return <BadgeFeaturesExample />;
}
`;

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

export default function BadgeFeaturesPage() {
  return <BadgeFeaturesExample />;
}
