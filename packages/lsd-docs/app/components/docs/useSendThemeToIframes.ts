'use client';

import { type ExampleParams, useIframeMessageListener } from './useIframeSync';

export function useSendThemeToIframes() {
  useIframeMessageListener('example-params', (params: ExampleParams) => {
    const root = document.documentElement;

    if (params.theme) {
      if (params.theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }

    if (params.accent) {
      if (params.accent === 'monochrome') {
        root.removeAttribute('data-theme');
      } else {
        root.setAttribute('data-theme', params.accent);
      }
    }

    if (params.font) {
      root.classList.remove('font-serif', 'font-sans', 'font-mono');
      if (params.font === 'serif') {
        root.classList.add('font-serif');
      } else if (params.font === 'sans-serif') {
        root.classList.add('font-sans');
      } else if (params.font === 'monospace') {
        root.classList.add('font-mono');
      }
    }
  });
}
