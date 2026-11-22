'use client';

import * as React from 'react';

const CLOUDFLARE_TURNSTILE_SITEKEY = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY!;
if (!CLOUDFLARE_TURNSTILE_SITEKEY) throw new Error('CLOUDFLARE_TURNSTILE_SITEKEY is not set');

// 'interaction-only' keeps the widget hidden unless Cloudflare needs the visitor to do something.
type Appearance = 'always' | 'interaction-only';

type Turnstile = {
  render: (
    container: string | HTMLElement,
    options: { sitekey: string; size: string; appearance: Appearance }
  ) => string;
  getResponse: (widgetId: string) => string | undefined;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile: Turnstile;
    onTurnstileReady: Promise<void>;
  }
}

/*
Renders a Cloudflare Turnstile widget into the element given `containerRef`.
The Turnstile script itself is loaded once in the root layout.
*/
export const useTurnstile = (options?: { appearance?: Appearance }) => {
  const appearance = options?.appearance ?? 'always';
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const widgetIdRef = React.useRef<string | null>(null);

  // Whether the widget is taking up space. A hidden 'interaction-only' widget has no height.
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => setIsVisible(container.offsetHeight > 0));
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    let isCancelled = false;

    window.onTurnstileReady?.then(() => {
      if (isCancelled || widgetIdRef.current) return;
      if (!window.turnstile || !containerRef.current) return;

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: CLOUDFLARE_TURNSTILE_SITEKEY,
        size: 'flexible',
        appearance,
      });
    });

    return () => {
      isCancelled = true;
      if (!widgetIdRef.current) return;
      window.turnstile?.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    };
  }, [appearance]);

  const getToken = React.useCallback(() => {
    if (!widgetIdRef.current) return null;
    return window.turnstile?.getResponse(widgetIdRef.current) || null;
  }, []);

  // Resolves with the token once Cloudflare has issued one, or null if none arrives in time.
  // A hidden widget gives no sign that it's still working, so callers wait rather than fail.
  const waitForToken = React.useCallback(
    async (timeoutInMs = 8000) => {
      const deadline = Date.now() + timeoutInMs;

      while (Date.now() < deadline) {
        const token = getToken();
        if (token) return token;
        await new Promise((resolve) => window.setTimeout(resolve, 200));
      }

      return getToken();
    },
    [getToken]
  );

  // A token can only be verified once, so reset after any submission that might be retried.
  const reset = React.useCallback(() => {
    if (!widgetIdRef.current) return;
    window.turnstile?.reset(widgetIdRef.current);
  }, []);

  return { containerRef, isVisible, getToken, waitForToken, reset };
};
