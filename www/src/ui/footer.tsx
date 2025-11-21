'use client';

import * as Content from '@/lib/content';
import * as Graphics from '@/ui/graphics';
import * as Page from '@/ui/page';
import * as Text from '@/ui/text';

import NewsletterSignup from '@/ui/newsletterSignup';

import Link from 'next/link';

const Footer = () => {
  return (
    <div className="grid grid-cols-subgrid col-span-full">
      <div className="pt-32 pb-16 mx-auto col-span-full max-w-[450px]">
        <NewsletterSignup />
      </div>
      <footer className="gradient-dark dark-theme relative min-h-footer-height z-10 grid grid-cols-subgrid col-span-full pt-6 pb-8">
        <Page.Container className="flex flex-col justify-between">
          <div className="flex flex-col md:flex-row md:items-start justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
              <div className="h-[32px]">
                <Graphics.Logomark />
              </div>
              <div className="h-[20px] text-foreground">
                <Graphics.Wordmark />
              </div>
            </Link>
            <div className="flex flex-col items-start md:items-end">
              <div className="md:pl-8 pt-14 md:pt-0 flex flex-col md:flex-row md:items-center gap-x-8 gap-y-4">
                {Content.FOOTER_MENU.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href || ''}
                    className="text-foreground hover:opacity-70 transition-opacity"
                  >
                    <Text.Interface16>{item.label}</Text.Interface16>
                  </Link>
                ))}
              </div>
              <div className="mt-12 flex items-center gap-x-3">
                <Link
                  href={Content.FACEBOOK_LINK}
                  aria-label="Facebook"
                  className="text-foreground hover:opacity-70 transition-opacity"
                  target="_blank"
                >
                  <Graphics.FacebookIcon innerFill="var(--color-emphasis)" />
                </Link>
                <Link
                  href={Content.TWITTER_LINK}
                  aria-label="Twitter"
                  className="text-foreground hover:opacity-70 transition-opacity"
                  target="_blank"
                >
                  <Graphics.XLogo innerFill="var(--color-emphasis)" />
                </Link>
                <Link
                  href={Content.LINKEDIN_LINK}
                  aria-label="LinkedIn"
                  className="text-foreground hover:opacity-70 transition-opacity"
                  target="_blank"
                >
                  <Graphics.LinkedInIcon innerFill="var(--color-emphasis)" />
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-16 md:pt-0">
            <div className="flex justify-between items-end">
              <Text.Interface16 className="text-foreground">
                <span>2 Northside Piers</span>
                <br />
                <span>Brooklyn, NY 11249</span>
              </Text.Interface16>
              <div className="mt-8">
                <Text.Interface16 className="text-foreground">
                  <span>© {new Date().getFullYear()} Art Guard</span>
                  <br />
                  <span>All rights reserved</span>
                </Text.Interface16>
              </div>
            </div>
          </div>
        </Page.Container>
      </footer>
    </div>
  );
};

export default Footer;
