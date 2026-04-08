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
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Avatar>
        <AvatarImage src="/nipsysdev-nft_2.webp" alt="Nipsys NFT" />
        <AvatarFallback>NF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  );
}`;

export function AvatarBasicExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Avatar>
        <AvatarImage src="/nipsysdev-nft_2.webp" alt="Nipsys NFT" />
        <AvatarFallback>NF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default function Basic() {
  return <AvatarBasicExample />;
}
