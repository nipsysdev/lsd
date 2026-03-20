'use client';

import { Checkbox, Label, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Checkbox, Label, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [controlled, setControlled] = useState(false);
  const [controlledChecked, setControlledChecked] = useState(true);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Basic States</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox />
          <Typography variant="body1">Unchecked</Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox defaultChecked />
          <Typography variant="body1">Checked</Typography>
        </div>
      </div>

      <Typography variant="label1">Controlled Components</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
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

      <Typography variant="label1">With Labels</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox id="terms" />
          <Label htmlFor="terms">
            I agree to the terms and conditions
          </Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox id="newsletter" defaultChecked />
          <Label htmlFor="newsletter">
            Subscribe to newsletter
          </Label>
        </div>
      </div>
    </div>
  );
}`;

export function CheckboxExample() {
  useInIframeThemeSync();
  const [controlled, setControlled] = useState(false);
  const [controlledChecked, setControlledChecked] = useState(true);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Basic States</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox />
          <Typography variant="body1">Unchecked</Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox defaultChecked />
          <Typography variant="body1">Checked</Typography>
        </div>
      </div>

      <Typography variant="label1">Controlled Components</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
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

      <Typography variant="label1">With Labels</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox id="terms" />
          <Label htmlFor="terms">I agree to the terms and conditions</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox id="newsletter" defaultChecked />
          <Label htmlFor="newsletter">Subscribe to newsletter</Label>
        </div>
      </div>
    </div>
  );
}
