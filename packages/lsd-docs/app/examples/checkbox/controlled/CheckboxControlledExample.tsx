'use client';

import { Checkbox, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Checkbox, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [controlled, setControlled] = useState(false);
  const [controlledChecked, setControlledChecked] = useState(true);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Controlled Components</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox
            checked={controlled}
            onCheckedChange={checked => setControlled(checked === true)}
          />
          <Typography variant="body1">
            Controlled ({controlled ? 'checked' : 'unchecked'})
          </Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox
            checked={controlledChecked}
            onCheckedChange={checked => setControlledChecked(checked === true)}
          />
          <Typography variant="body1">
            Controlled ({controlledChecked ? 'checked' : 'unchecked'})
          </Typography>
        </div>
      </div>
    </div>
  );
}`;

export function CheckboxControlledExample() {
  useSendThemeToIframes();
  const [controlled, setControlled] = useState(false);
  const [controlledChecked, setControlledChecked] = useState(true);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Controlled Components</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox
            checked={controlled}
            onCheckedChange={checked => setControlled(checked === true)}
          />
          <Typography variant="body1">
            Controlled ({controlled ? 'checked' : 'unchecked'})
          </Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox
            checked={controlledChecked}
            onCheckedChange={checked => setControlledChecked(checked === true)}
          />
          <Typography variant="body1">
            Controlled ({controlledChecked ? 'checked' : 'unchecked'})
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default function CheckboxControlledPage() {
  return <CheckboxControlledExample />;
}
