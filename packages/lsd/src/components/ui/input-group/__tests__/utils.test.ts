import { describe, expect, it } from 'vitest';
import {
  getInputGroupButtonSize,
  getInputGroupHeightClasses,
  getInputGroupIconSize,
  getInputGroupPaddingClasses,
  getInputGroupTextSizeClasses,
} from '../utils';

describe('getInputGroupHeightClasses', () => {
  it('returns height classes for sm size', () => {
    const result = getInputGroupHeightClasses('sm');
    expect(result).toBe('lsd:h-8');
  });

  it('returns height classes for md size', () => {
    const result = getInputGroupHeightClasses('md');
    expect(result).toBe('lsd:h-9');
  });

  it('returns height classes for lg size', () => {
    const result = getInputGroupHeightClasses('lg');
    expect(result).toBe('lsd:h-11');
  });

  it('returns default (md) height classes for unknown size', () => {
    const result = getInputGroupHeightClasses('invalid' as any);
    expect(result).toBe('lsd:h-9');
  });
});

describe('getInputGroupTextSizeClasses', () => {
  it('returns text size classes for sm size', () => {
    const result = getInputGroupTextSizeClasses('sm');
    expect(result).toBe('lsd:text-sm');
  });

  it('returns text size classes for md size', () => {
    const result = getInputGroupTextSizeClasses('md');
    expect(result).toBe('lsd:text-base');
  });

  it('returns text size classes for lg size', () => {
    const result = getInputGroupTextSizeClasses('lg');
    expect(result).toBe('lsd:text-lg');
  });

  it('returns default (md) text size classes for unknown size', () => {
    const result = getInputGroupTextSizeClasses('invalid' as any);
    expect(result).toBe('lsd:text-base');
  });
});

describe('getInputGroupPaddingClasses', () => {
  it('returns padding classes for sm size', () => {
    const result = getInputGroupPaddingClasses('sm');
    expect(result).toBe('lsd:py-(--lsd-spacing-smallest)');
  });

  it('returns padding classes for md size', () => {
    const result = getInputGroupPaddingClasses('md');
    expect(result).toBe('lsd:py-(--lsd-spacing-smaller)');
  });

  it('returns padding classes for lg size', () => {
    const result = getInputGroupPaddingClasses('lg');
    expect(result).toBe('lsd:py-(--lsd-spacing-base)');
  });

  it('returns default (md) padding classes for unknown size', () => {
    const result = getInputGroupPaddingClasses('invalid' as any);
    expect(result).toBe('lsd:py-(--lsd-spacing-smaller)');
  });
});

describe('getInputGroupButtonSize', () => {
  it('returns sm button size for sm group size', () => {
    const result = getInputGroupButtonSize('sm');
    expect(result).toBe('sm');
  });

  it('returns md button size for md group size', () => {
    const result = getInputGroupButtonSize('md');
    expect(result).toBe('md');
  });

  it('returns lg button size for lg group size', () => {
    const result = getInputGroupButtonSize('lg');
    expect(result).toBe('lg');
  });

  it('returns default (md) button size for unknown group size', () => {
    const result = getInputGroupButtonSize('invalid' as any);
    expect(result).toBe('md');
  });
});

describe('getInputGroupIconSize', () => {
  it('returns icon-xs icon size for sm group size', () => {
    const result = getInputGroupIconSize('sm');
    expect(result).toBe('icon-xs');
  });

  it('returns icon-xs icon size for md group size', () => {
    const result = getInputGroupIconSize('md');
    expect(result).toBe('icon-xs');
  });

  it('returns icon-sm icon size for lg group size', () => {
    const result = getInputGroupIconSize('lg');
    expect(result).toBe('icon-sm');
  });

  it('returns default (icon-xs) icon size for unknown group size', () => {
    const result = getInputGroupIconSize('invalid' as any);
    expect(result).toBe('icon-xs');
  });
});
