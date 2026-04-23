import { describe, expect, it } from 'vitest';
import { getLabelSizeClasses, getTextSizeClasses, getVerticalPaddingClasses } from '../utils';

describe('getTextSizeClasses', () => {
  it('returns xs size classes', () => {
    const result = getTextSizeClasses('xs');
    expect(result).toBe('lsd:text-xs file:lsd:text-xs');
  });

  it('returns sm size classes', () => {
    const result = getTextSizeClasses('sm');
    expect(result).toBe('lsd:text-sm file:lsd:text-sm');
  });

  it('returns md size classes', () => {
    const result = getTextSizeClasses('md');
    expect(result).toBe('lsd:text-base file:lsd:text-base');
  });

  it('returns lg size classes', () => {
    const result = getTextSizeClasses('lg');
    expect(result).toBe('lsd:text-lg file:lsd:text-lg');
  });

  it('returns xl size classes', () => {
    const result = getTextSizeClasses('xl');
    expect(result).toBe('lsd:text-xl file:lsd:text-xl');
  });

  it('returns default (md) size classes for unknown size', () => {
    const result = getTextSizeClasses('invalid' as any);
    expect(result).toBe('lsd:text-base file:lsd:text-base');
  });
});

describe('getVerticalPaddingClasses', () => {
  it('returns xs padding classes', () => {
    const result = getVerticalPaddingClasses('xs');
    expect(result).toBe('lsd:py-[var(--lsd-spacing-smallest)]');
  });

  it('returns sm padding classes', () => {
    const result = getVerticalPaddingClasses('sm');
    expect(result).toBe('lsd:py-[var(--lsd-spacing-smaller)]');
  });

  it('returns md padding classes', () => {
    const result = getVerticalPaddingClasses('md');
    expect(result).toBe('lsd:py-[var(--lsd-spacing-small)]');
  });

  it('returns lg padding classes', () => {
    const result = getVerticalPaddingClasses('lg');
    expect(result).toBe('lsd:py-[var(--lsd-spacing-base)]');
  });

  it('returns xl padding classes', () => {
    const result = getVerticalPaddingClasses('xl');
    expect(result).toBe('lsd:py-[var(--lsd-spacing-large)]');
  });

  it('returns default (md) padding classes for unknown size', () => {
    const result = getVerticalPaddingClasses('invalid' as any);
    expect(result).toBe('lsd:py-[var(--lsd-spacing-small)]');
  });
});

describe('getLabelSizeClasses', () => {
  it('returns xs label classes', () => {
    const result = getLabelSizeClasses('xs');
    expect(result).toBe('lsd:text-xs');
  });

  it('returns sm label classes', () => {
    const result = getLabelSizeClasses('sm');
    expect(result).toBe('lsd:text-xs');
  });

  it('returns md label classes', () => {
    const result = getLabelSizeClasses('md');
    expect(result).toBe('lsd:text-sm');
  });

  it('returns lg label classes', () => {
    const result = getLabelSizeClasses('lg');
    expect(result).toBe('lsd:text-base');
  });

  it('returns xl label classes', () => {
    const result = getLabelSizeClasses('xl');
    expect(result).toBe('lsd:text-lg');
  });

  it('returns default (md) label classes for unknown size', () => {
    const result = getLabelSizeClasses('invalid' as any);
    expect(result).toBe('lsd:text-sm');
  });
});
