'use client';

import * as React from 'react';
import { type ExampleParams, sendToIframe } from './useIframeSync';
import { useThemeSync } from './useThemeSync';

type IframeState = {
  iframe: HTMLIFrameElement;
  hasLoadListener: boolean;
};

export function useSendThemeToIframes(...iframeRefs: React.RefObject<HTMLIFrameElement | null>[]) {
  const { theme, accent, font } = useThemeSync();
  const iframeStatesRef = React.useRef<Map<HTMLIFrameElement, IframeState>>(new Map());
  const lastParamsRef = React.useRef<ExampleParams>({ theme, accent, font });

  // Update current params ref whenever theme changes
  React.useEffect(() => {
    lastParamsRef.current = { theme, accent, font };
  }, [theme, accent, font]);

  // Send params to iframes when theme, accent, or font changes
  React.useEffect(() => {
    const params: ExampleParams = { theme, accent, font };
    console.log(
      '[useSendThemeToIframes] Sending params on change:',
      params,
      'to iframes:',
      iframeRefs.length
    );
    iframeRefs.forEach(ref => void sendToIframe(ref.current, 'example-params', params));
  }, [theme, accent, font, iframeRefs]);

  // Setup load listeners for iframes, handling lazy loading
  React.useEffect(() => {
    const currentIframes = iframeRefs
      .map(ref => ref.current)
      .filter((iframe): iframe is HTMLIFrameElement => iframe !== null);

    const newIframes: HTMLIFrameElement[] = [];
    const existingIframes: HTMLIFrameElement[] = [];

    currentIframes.forEach(iframe => {
      if (!iframeStatesRef.current.has(iframe)) {
        newIframes.push(iframe);
      } else {
        existingIframes.push(iframe);
      }
    });

    const cleanups: (() => void)[] = [];

    // Setup load listeners for new and existing iframes
    [...newIframes, ...existingIframes].forEach(iframe => {
      const state = iframeStatesRef.current.get(iframe);
      const alreadyHasListener = state?.hasLoadListener ?? false;

      if (!alreadyHasListener) {
        const handleLoad = () => {
          const params = lastParamsRef.current;
          sendToIframe(iframe, 'example-params', params);
        };

        iframe.addEventListener('load', handleLoad);
        iframeStatesRef.current.set(iframe, { iframe, hasLoadListener: true });
        cleanups.push(() => {
          iframe.removeEventListener('load', handleLoad);
        });
      }
    });

    return () => {
      cleanups.forEach(cleanup => void cleanup());
    };
  }, [iframeRefs]);
}
