'use client';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  Typography,
} from '@nipsys/lsd';
import { LockIcon, MagnifyingGlassIcon, UserIcon } from '@phosphor-icons/react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  Typography,
} from '@nipsys/lsd';
import { 
  MagnifyingGlassIcon, 
  UserIcon, 
  LockIcon,
} from '@phosphor-icons/react';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Disabled input</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <MagnifyingGlassIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." disabled />
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Disabled with button</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <UserIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="Username" disabled />
          <InputGroupAddon align="inline-end">
            <InputGroupButton disabled>
              Submit
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Disabled password field</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <LockIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput type="password" placeholder="Password" disabled />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="icon" disabled>
              👁️
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Disabled add-on text</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" disabled />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}`;

export function InputGroupDisabledExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
          Disabled input
        </Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <MagnifyingGlassIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." disabled />
        </InputGroup>
      </div>

      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
          Disabled with button
        </Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <UserIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="Username" disabled />
          <InputGroupAddon align="inline-end">
            <InputGroupButton disabled>Submit</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
          Disabled password field
        </Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <LockIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput type="password" placeholder="Password" disabled />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="icon" disabled>
              👁️
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
          Disabled add-on text
        </Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" disabled />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}

export default function Disabled() {
  return <InputGroupDisabledExample />;
}
