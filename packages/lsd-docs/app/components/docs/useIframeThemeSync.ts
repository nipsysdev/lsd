'use client';

import * as React from 'react';
import { type ExampleParams, sendToIframe } from './useIframeSync';
import { useThemeSync } from './useThemeSync';

export function useIframeThemeSync(...iframeRefs: React.RefObject<HTMLIFrameElement | null>[]) {
  const { theme, accent, font } = useThemeSync();

  // Send params to iframes when theme, accent, or font changes
  React.useEffect(() => {
    const params: ExampleParams = { theme, accent, font };
    iframeRefs.forEach(ref => sendToIframe(ref.current, 'example-params', params));
  }, [theme, accent, font, iframeRefs]);

  // Send initial params when iframes load
  React.useEffect(() => {
    const iframes = iframeRefs.map(ref => ref.current).filter(Boolean) as HTMLIFrameElement[];

    const params: ExampleParams = { theme, accent, font };

    iframes.forEach(iframe => {
      const handleLoad = () => {
        sendToIframe(iframe, 'example-params', params);
      };

      iframe.addEventListener('load', handleLoad);
      return () => {
        iframe.removeEventListener('load', handleLoad);
      };
    });
  }, [theme, accent, font, iframeRefs]);
}
