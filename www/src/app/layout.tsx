import * as Next from 'next';
import * as Ui from '@/ui';
import * as NewsletterContext from '@/lib/newsletterContext';

import * as Utils from '@/lib/utils';

import localFont from 'next/font/local';
import Script from 'next/script';

import './globals.css';

const Bradford = localFont({
  variable: '--font-display',
  src: [
    {
      path: '../../public/fonts/BradfordLLWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/BradfordLLWeb-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/BradfordLLWeb-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/BradfordLLWeb-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
});

const TrueSans = localFont({
  variable: '--font-interface',
  src: [
    {
      path: '../../public/fonts/TrueSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TrueSans-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/TrueSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TrueSans-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/TrueSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TrueSans-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/TrueSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TrueSans-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/TrueSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TrueSans-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
});

export const metadata: Next.Metadata = {
  title: 'Art Guard',
  description: 'The Next Level In Asset Protection Technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script id="turnstile-loader">
        {`
          window.onTurnstileReady = new Promise((resolve) => {
            window.resolveTurnstile = resolve;
          });
          
          window.onTurnstileLoad = () => {
            window.resolveTurnstile();
          };
        `}
      </Script>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-66368C288P" />
      <Script id="g-tag">
        {`
          window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-66368C288P');
        `}
      </Script>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad"
        defer
      ></Script>
      <body className={Utils.cx(`${Bradford.variable} ${TrueSans.variable} antialiased`)}>
        <NewsletterContext.Provider>
          <Ui.Layout.Root>
            <Ui.Announcement.Bar />
            <Ui.Nav />
            <Ui.DialogPreview />
            {children}
            <Ui.Footer />
          </Ui.Layout.Root>
        </NewsletterContext.Provider>
      </body>
    </html>
  );
}
