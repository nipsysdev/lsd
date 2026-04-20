'use client';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Typography,
} from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'sm';

/**
 * @docSection feature
 */
export const CODE = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">inline-start</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" />
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">inline-end</Typography>
        <InputGroup>
          <InputGroupInput placeholder="username" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>@example.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}`;

export function InputGroupAlignmentExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
          inline-start
        </Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" />
        </InputGroup>
      </div>

      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
          inline-end
        </Typography>
        <InputGroup>
          <InputGroupInput placeholder="username" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>@example.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}

export default function Alignment() {
  return <InputGroupAlignmentExample />;
}
