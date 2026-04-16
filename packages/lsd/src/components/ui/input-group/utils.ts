import type { InputGroupSize } from './types';

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
