'use client';

import * as React from 'react';

const STORAGE_KEY = 'artguard-newsletter-dialog';
const CURRENT_VERSION = 'v1';
const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;
const INITIAL_DELAY_IN_MS = 5 * 1000;
const FIRST_SCROLL_DELAY_IN_MS = 1 * 1000;

type StoredNewsletterDialogDismissal = {
  version: string;
  dismissedAt: string;
};

type NewsletterContextValue = {
  isNewsletterDialogVisible: boolean;
  onDismiss: () => void;
  version: string;
};

const NewsletterContext = React.createContext<NewsletterContextValue | null>(null);

const shouldShowNewsletterDialog = () => {
  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    if (!storedValue) return true;

    const parsedValue = JSON.parse(storedValue) as Partial<StoredNewsletterDialogDismissal>;

    if (parsedValue.version !== CURRENT_VERSION) return true;
    if (typeof parsedValue.dismissedAt !== 'string') return true;

    const dismissedAt = new Date(parsedValue.dismissedAt).getTime();
    if (Number.isNaN(dismissedAt)) return true;

    return Date.now() - dismissedAt >= THIRTY_DAYS_IN_MS;
  } catch {
    return true;
  }
};

type ProviderProps = React.PropsWithChildren;

export const Provider: React.FC<ProviderProps> = (props) => {
  const [isNewsletterDialogVisible, setIsNewsletterDialogVisible] = React.useState(false);

  React.useEffect(() => {
    if (!shouldShowNewsletterDialog()) return;

    let isCancelled = false;
    let lastScrollY = window.scrollY;
    let hasScheduledScrollReveal = false;

    let scrollRevealTimeoutId: number | null = null;
    let initialRevealTimeoutId: number | null = null;

    const clearTimers = () => {
      if (scrollRevealTimeoutId !== null) window.clearTimeout(scrollRevealTimeoutId);
      if (initialRevealTimeoutId !== null) window.clearTimeout(initialRevealTimeoutId);
    };

    const revealDialog = () => {
      if (isCancelled) return;

      clearTimers();
      window.removeEventListener('scroll', onScroll);
      setIsNewsletterDialogVisible(true);
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const isFirstDownwardScroll = currentScrollY > lastScrollY && currentScrollY > 0;

      lastScrollY = currentScrollY;

      if (!isFirstDownwardScroll || hasScheduledScrollReveal) return;

      hasScheduledScrollReveal = true;
      window.removeEventListener('scroll', onScroll);
      scrollRevealTimeoutId = window.setTimeout(revealDialog, FIRST_SCROLL_DELAY_IN_MS);
    };

    initialRevealTimeoutId = window.setTimeout(revealDialog, INITIAL_DELAY_IN_MS);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      isCancelled = true;
      clearTimers();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onDismiss = () => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          version: CURRENT_VERSION,
          dismissedAt: new Date().toISOString(),
        } satisfies StoredNewsletterDialogDismissal)
      );
    } catch {
      // Ignore localStorage write errors and still hide the dialog for this session render.
    }

    setIsNewsletterDialogVisible(false);
  };

  return (
    <NewsletterContext.Provider
      value={{
        isNewsletterDialogVisible,
        onDismiss,
        version: CURRENT_VERSION,
      }}
    >
      {props.children}
    </NewsletterContext.Provider>
  );
};

export const useContext = () => {
  const context = React.useContext(NewsletterContext);

  if (context === null) {
    throw new Error(
      'NewsletterContext.useContext must be used within a NewsletterContext.Provider'
    );
  }

  return context;
};
