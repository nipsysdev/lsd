'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Avatar size="sm">
          <AvatarImage src="/nipsysdev-nft_2.webp" alt="Small" />
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <Avatar size="default">
          <AvatarImage src="/nipsysdev-nft_2.webp" alt="Default" />
          <AvatarFallback>DF</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="/nipsysdev-nft_2.webp" alt="Large" />
          <AvatarFallback>LG</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}`;

export function AvatarSizesExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Avatar size="sm">
          <AvatarImage src="/nipsysdev-nft_2.webp" alt="Small" />
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <Avatar size="default">
          <AvatarImage src="/nipsysdev-nft_2.webp" alt="Default" />
          <AvatarFallback>DF</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="/nipsysdev-nft_2.webp" alt="Large" />
          <AvatarFallback>LG</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default function Sizes() {
  return <AvatarSizesExample />;
}
