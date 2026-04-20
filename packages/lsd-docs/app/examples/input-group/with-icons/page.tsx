'use client';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  Typography,
} from '@nipsys/lsd';
import {
  CheckIcon,
  EnvelopeIcon,
  EyeIcon,
  LockIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  UserIcon,
} from '@phosphor-icons/react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'lg';

/**
 * @docSection feature
 */
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
  EnvelopeIcon,
  LockIcon,
  EyeIcon,
  PlusIcon,
  CheckIcon,
} from '@phosphor-icons/react';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Search with icon</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <MagnifyingGlassIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." />
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Username field</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <UserIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="Enter username" />
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Email field</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <EnvelopeIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="email@example.com" />
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Password with toggle</Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <LockIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput type="password" placeholder="Enter password" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="icon">
              <EyeIcon weight="duotone" />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">Action buttons</Typography>
        <InputGroup>
          <InputGroupInput placeholder="Add item..." />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="icon">
              <PlusIcon />
            </InputGroupButton>
            <InputGroupButton variant="icon">
              <CheckIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}`;

export function InputGroupWithIconsExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
          Search with icon
        </Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <MagnifyingGlassIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." />
        </InputGroup>
      </div>

      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
          Username field
        </Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <UserIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="Enter username" />
        </InputGroup>
      </div>

      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
          Email field
        </Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <EnvelopeIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="email@example.com" />
        </InputGroup>
      </div>

      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
          Password with toggle
        </Typography>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <LockIcon weight="duotone" />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput type="password" placeholder="Enter password" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="icon">
              <EyeIcon weight="duotone" />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
          Action buttons
        </Typography>
        <InputGroup>
          <InputGroupInput placeholder="Add item..." />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="icon">
              <PlusIcon />
            </InputGroupButton>
            <InputGroupButton variant="icon">
              <CheckIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}

export default function WithIcons() {
  return <InputGroupWithIconsExample />;
}
