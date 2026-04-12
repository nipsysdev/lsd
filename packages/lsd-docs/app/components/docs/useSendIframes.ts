'use client';

import * as React from 'react';
import { type ExampleParams, sendToIframe } from './useIframeSync';
import { useThemeSync } from './useThemeSync';

export function useSendThemeToIframes(...iframeRefs: React.RefObject<HTMLIFrameElement | null>[]) {
  const { theme, accent, font } = useThemeSync();

  // DEBUG: Log iframe refs count
  console.log(
    '[useSendThemeToIframes] iframeRefs count:',
    iframeRefs.length,
    'refs:',
    iframeRefs.map(r => r?.current)
  );

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

  // Send initial params when iframes load
  React.useEffect(() => {
    const iframes = iframeRefs.map(ref => ref.current).filter(Boolean) as HTMLIFrameElement[];
    const params: ExampleParams = { theme, accent, font };

    const cleanups = iframes.map(iframe => {
      const handleLoad = () => {
        sendToIframe(iframe, 'example-params', params);
      };

      iframe.addEventListener('load', handleLoad);
      return () => {
        iframe.removeEventListener('load', handleLoad);
      };
    });

    return () => {
      cleanups.forEach(cleanup => void cleanup());
    };
  }, [theme, accent, font, iframeRefs]);
}
