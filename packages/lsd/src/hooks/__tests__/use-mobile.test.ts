import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useIsMobile } from '../use-mobile';

describe('useMobile', () => {
  let originalMatchMedia: typeof window.matchMedia;
  let originalInnerWidth: number;

  beforeEach(() => {
    originalMatchMedia = window.matchMedia;
    originalInnerWidth = window.innerWidth;
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: originalInnerWidth,
    });
  });

  it('returns false when media query does not match', () => {
    // The mock in setup.ts returns matches: false by default
    // Set window.innerWidth to a value >= 768
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 1024,
    });

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });

  it('returns true when media query matches', () => {
    // Set window.innerWidth to a value < 768 to simulate mobile
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 500,
    });

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);
  });

  it('updates value when media query match changes', () => {
    // Set window.innerWidth to a value >= 768 initially
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });

    const listeners: Array<(event: MediaQueryListEvent) => void> = [];
    window.matchMedia = vi.fn().mockImplementation(() => ({
      matches: false,
      media: '(max-width: 767px)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn((event: string, listener: (e: MediaQueryListEvent) => void) => {
        if (event === 'change') {
          listeners.push(listener);
        }
      }),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })) as any;

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);

    // Simulate a media query change by updating window.innerWidth and calling the listener
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500,
    });

    const listenerCallback = listeners[0];
    const mockEvent = { matches: true } as MediaQueryListEvent;
    act(() => {
      listenerCallback(mockEvent);
    });

    expect(result.current).toBe(true);
  });

  it('cleans up event listeners on unmount', () => {
    // Set window.innerWidth to a value >= 768
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 1024,
    });

    window.matchMedia = vi.fn().mockImplementation(() => ({
      matches: false,
      media: '(max-width: 767px)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })) as any;

    const { unmount } = renderHook(() => useIsMobile());

    const mediaQueryList = (window.matchMedia as ReturnType<typeof vi.fn>).mock.results[0].value;

    expect(mediaQueryList.addEventListener).toHaveBeenCalledTimes(1);

    unmount();

    expect(mediaQueryList.removeEventListener).toHaveBeenCalledTimes(1);
  });

  it('uses default breakpoint of (max-width: 767px)', () => {
    // Set window.innerWidth to a value < 768
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 500,
    });

    window.matchMedia = vi.fn().mockImplementation(() => ({
      matches: true,
      media: '(max-width: 767px)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })) as any;

    renderHook(() => useIsMobile());

    expect(window.matchMedia).toHaveBeenCalledWith('(max-width: 767px)');
  });
});
