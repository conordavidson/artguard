import * as Next from 'next';
import * as Ui from '@/ui';

import * as Utils from '@/lib/utils';

import localFont from 'next/font/local';

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
      <body className={Utils.cx(`${Bradford.variable} ${TrueSans.variable} antialiased`)}>
        <Ui.Layout.Root>
          <Ui.Announcement.Bar />
          <Ui.Nav />
          {children}
          <Ui.Footer />
        </Ui.Layout.Root>
      </body>
    </html>
  );
}
