'use client';

import { type ExampleParams, useIframeMessageListener } from './useIframeSync';

export function useSendThemeToIframes() {
  useIframeMessageListener('example-params', (params: ExampleParams) => {
    console.log('[IFRAME] Received theme params:', params);
    const root = document.documentElement;

    if (params.theme) {
      console.log('[IFRAME] Applying theme:', params.theme);
      if (params.theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }

    if (params.accent) {
      console.log('[IFRAME] Applying accent:', params.accent);
      if (params.accent === 'monochrome') {
        root.removeAttribute('data-theme');
      } else {
        root.setAttribute('data-theme', params.accent);
      }
    }

    if (params.font) {
      console.log('[IFRAME] Applying font:', params.font);
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
