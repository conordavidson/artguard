import * as Button from "@/ui/button";
import * as Content from "@/lib/content";
import * as Graphics from "@/ui/graphics";
import * as Page from "@/ui/page";
import * as Text from "@/ui/text";

import Link from "next/link";

const Nav = () => {
  return (
    <nav className="relative z-10 h-nav-height grid grid-cols-subgrid col-span-full">
      <Page.Container className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <div className="h-[24px]">
              <Graphics.Logomark />
            </div>
            <div className="h-[16px]">
              <Graphics.Wordmark />
            </div>
          </Link>
          <div className="pl-8 flex items-center gap-x-8">
            {Content.NAVIGATION_MENU.map((item) => (
              <Link
                key={item.label}
                href={item.href || ""}
                className="hover:opacity-70 transition-opacity"
              >
                <Text.Interface16>{item.label}</Text.Interface16>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Button.Primary href="/contact">Get in touch</Button.Primary>
        </div>
      </Page.Container>
    </nav>
  );
};

export default Nav;
