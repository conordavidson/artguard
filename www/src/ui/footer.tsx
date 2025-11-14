"use client";

import * as Content from "@/lib/content";
import * as Graphics from "@/ui/graphics";
import * as Page from "@/ui/page";
import * as Text from "@/ui/text";

import NewsletterSignup from "@/ui/newsletterSignup";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid grid-cols-subgrid col-span-full">
      <div className="pt-32 pb-16 mx-auto col-span-full max-w-[450px]">
        <NewsletterSignup />
      </div>
      <footer className="gradient-dark dark-theme relative min-h-footer-height z-10 grid grid-cols-subgrid col-span-full pt-6 pb-8">
        <Page.Container className="flex flex-col justify-between">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <div className="h-[24px]">
                <Graphics.Logomark />
              </div>
              <div className="h-[16px] text-foreground">
                <Graphics.Wordmark />
              </div>
            </Link>
            <div className="md:pl-8 pt-12 md:pt-0 flex flex-col md:flex-row md:items-center gap-x-8 gap-y-4">
              {Content.FOOTER_MENU.map((item) => (
                <Link
                  key={item.label}
                  href={item.href || ""}
                  className="text-foreground hover:opacity-70 transition-opacity"
                >
                  <Text.Interface16>{item.label}</Text.Interface16>
                </Link>
              ))}
            </div>
          </div>
          <div className="pt-20 md:pt-0">
            <Text.Interface16 className="text-foreground">
              <span>2 Northside Piers</span>
              <br />
              <span>Brooklyn, NY 11249</span>
            </Text.Interface16>
          </div>
        </Page.Container>
      </footer>
    </div>
  );
};

export default Footer;
