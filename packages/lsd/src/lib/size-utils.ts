import type { InputGroupSize } from '@/components/ui/input-group/types';
import type { SizeVariant, SquareSize } from './types';

export function getTextSizeClasses(size: SizeVariant): string {
  switch (size) {
    case 'xs':
      return 'lsd:text-xs file:lsd:text-xs';
    case 'sm':
      return 'lsd:text-sm file:lsd:text-sm';
    case 'md':
      return 'lsd:text-base file:lsd:text-base';
    case 'lg':
      return 'lsd:text-lg file:lsd:text-lg';
    case 'xl':
      return 'lsd:text-xl file:lsd:text-xl';
    default:
      return 'lsd:text-base file:lsd:text-base';
  }
}

export function getVerticalPaddingClasses(size: SizeVariant): string {
  const md = 'lsd:py-[var(--lsd-spacing-small)]';
  switch (size) {
    case 'xs':
      return 'lsd:py-[var(--lsd-spacing-smallest)]';
    case 'sm':
      return 'lsd:py-[var(--lsd-spacing-smaller)]';
    case 'md':
      return md;
    case 'lg':
      return 'lsd:py-[var(--lsd-spacing-base)]';
    case 'xl':
      return 'lsd:py-[var(--lsd-spacing-large)]';
    default:
      return md;
  }
}

export function getLabelSizeClasses(size: SizeVariant): string {
  switch (size) {
    case 'xs':
      return 'lsd:text-xs';
    case 'sm':
      return 'lsd:text-xs';
    case 'md':
      return 'lsd:text-sm';
    case 'lg':
      return 'lsd:text-base';
    case 'xl':
      return 'lsd:text-lg';
    default:
      return 'lsd:text-sm';
  }
}

export function getSpinnerSizeClasses(size: SizeVariant | SquareSize | undefined): string {
  const md = 'lsd:w-[var(--lsd-spacing-large)] lsd:h-[var(--lsd-spacing-large)]';
  switch (size) {
    case 'square-sm':
      return 'lsd:w-[var(--lsd-spacing-small)] lsd:h-[var(--lsd-spacing-small)]';
    case 'sm':
      return 'lsd:w-[var(--lsd-spacing-base)] lsd:h-[var(--lsd-spacing-base)]';
    case 'md':
    case 'square-md':
      return md;
    case 'lg':
    case 'square-lg':
      return 'lsd:w-[var(--lsd-spacing-larger)] lsd:h-[var(--lsd-spacing-larger)]';
    case 'square-xs':
      return 'lsd:w-[var(--lsd-spacing-smallest)] lsd:h-[var(--lsd-spacing-smallest)]';
    case 'xl':
    case 'square-xl':
      return 'lsd:w-[var(--lsd-spacing-largest)] lsd:h-[var(--lsd-spacing-largest)]';
    default:
      return md;
  }
}

export function getDotSizeClasses(size: 'sm' | 'md' | 'lg' | undefined): string {
  const md = 'lsd:w-[var(--lsd-spacing-small)] lsd:h-[var(--lsd-spacing-small)]';
  switch (size) {
    case 'sm':
      return 'lsd:w-[var(--lsd-spacing-smaller)] lsd:h-[var(--lsd-spacing-smaller)]';
    case 'md':
      return md;
    case 'lg':
      return 'lsd:w-[var(--lsd-spacing-base)] lsd:h-[var(--lsd-spacing-base)]';
    default:
      return md;
  }
}

export function getInputGroupHeightClasses(size: InputGroupSize): string {
  switch (size) {
    case 'sm':
      return 'lsd:h-8';
    case 'md':
      return 'lsd:h-9';
    case 'lg':
      return 'lsd:h-11';
    default:
      return 'lsd:h-9';
  }
}

export function getInputGroupTextSizeClasses(size: InputGroupSize): string {
  switch (size) {
    case 'sm':
      return 'lsd:text-sm';
    case 'md':
      return 'lsd:text-base';
    case 'lg':
      return 'lsd:text-lg';
    default:
      return 'lsd:text-base';
  }
}

export function getInputGroupPaddingClasses(size: InputGroupSize): string {
  switch (size) {
    case 'sm':
      return 'lsd:py-(--lsd-spacing-smallest)';
    case 'md':
      return 'lsd:py-(--lsd-spacing-smaller)';
    case 'lg':
      return 'lsd:py-(--lsd-spacing-base)';
    default:
      return 'lsd:py-(--lsd-spacing-smaller)';
  }
}

export function getInputGroupButtonSize(size: InputGroupSize): 'sm' | 'md' | 'lg' {
  switch (size) {
    case 'sm':
      return 'sm';
    case 'md':
      return 'md';
    case 'lg':
      return 'lg';
    default:
      return 'md';
  }
}

export function getInputGroupIconSize(size: InputGroupSize): 'icon-xs' | 'icon-sm' {
  switch (size) {
    case 'sm':
      return 'icon-xs';
    case 'md':
      return 'icon-xs';
    case 'lg':
      return 'icon-sm';
    default:
      return 'icon-xs';
  }
}

export function getAccordionIconSize(size: 'sm' | 'md' | 'lg'): string {
  switch (size) {
    case 'sm':
      return 'lsd:size-3';
    case 'lg':
      return 'lsd:size-5';
    default:
      return 'lsd:size-4';
  }
}

export function getAccordionPaddingBottom(size: 'sm' | 'md' | 'lg'): string {
  switch (size) {
    case 'sm':
      return 'lsd:pb-(--lsd-spacing-smaller)';
    case 'lg':
      return 'lsd:pb-(--lsd-spacing-larger)';
    default:
      return 'lsd:pb-(--lsd-spacing-base)';
  }
}
