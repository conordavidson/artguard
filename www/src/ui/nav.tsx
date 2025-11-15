"use client";

import * as Button from "@/ui/button";
import * as Content from "@/lib/content";
import * as Graphics from "@/ui/graphics";
import * as Page from "@/ui/page";
import * as React from "react";
import * as Text from "@/ui/text";
import * as Utils from "@/lib/utils";
import * as Navigation from "next/navigation";

import Link from "next/link";

const Nav: React.FC = () => {
  const currentPath = Navigation.usePathname();

  const [activeMenuId, setActiveMenuId] = React.useState<string | null>(null);
  const [lastActiveMenuId, setLastActiveMenuId] = React.useState<string | null>(
    null
  );

  React.useEffect(() => {
    if (activeMenuId) setLastActiveMenuId(activeMenuId);
  }, [activeMenuId]);

  const isSubmenuVisible = activeMenuId !== null || lastActiveMenuId !== null;

  const visibleSubmenu = React.useMemo(() => {
    const label = activeMenuId ?? lastActiveMenuId;
    if (!label) return null;
    const activeMenu = Content.NAVIGATION_MENU.find(
      (item) => item.label === label
    );
    if (!activeMenu) return null;
    if (!("submenu" in activeMenu)) return null;
    return activeMenu.submenu;
  }, [activeMenuId, lastActiveMenuId]);

  return (
    <nav
      className="sticky top-0 z-50 h-nav-height grid grid-cols-subgrid col-span-full"
      onMouseLeave={() => setActiveMenuId(null)}
    >
      <Page.Container className="relative z-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <div className="h-[24px]">
              <Graphics.Logomark />
            </div>
            <div
              className={Utils.cx("h-[16px]", {
                "text-white": isSubmenuVisible,
              })}
            >
              <Graphics.Wordmark />
            </div>
          </Link>
          <div className="pl-8 flex items-center gap-x-8">
            {Content.NAVIGATION_MENU.map((item) => {
              const content = () => {
                const isPathActive = currentPath === item.href;
                const isMenuActive = activeMenuId === item.label;

                return (
                  <div className="relative">
                    <div className="-z-10 absolute -top-1.5 left-0 right-0 flex justify-center">
                      <div
                        className={Utils.cx(
                          "h-[4px] w-[4px] bg-brand opacity-0 group-hover/nav-link:opacity-100 transition-all rounded-full",
                          {
                            "opacity-100": isMenuActive,
                          }
                        )}
                      ></div>
                    </div>
                    <Text.Interface16
                      className={Utils.cx(
                        "cursor-pointer text-foreground group-hover:opacity-70 group-hover/nav-link:text-brand transition-all",
                        {
                          "text-white": isSubmenuVisible,
                          "text-brand": isPathActive || isMenuActive,
                        }
                      )}
                    >
                      {item.label}
                    </Text.Interface16>
                  </div>
                );
              };

              if ("submenu" in item) {
                return (
                  <button
                    type="button"
                    className="relative"
                    key={item.label}
                    onClick={() => setActiveMenuId(item.label)}
                    onMouseEnter={() => setActiveMenuId(item.label)}
                  >
                    {content()}
                  </button>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setActiveMenuId(null)}
                  className="group/nav-link"
                >
                  {content()}
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <Button.Primary href="/contact">Get in touch</Button.Primary>
        </div>
      </Page.Container>

      <div
        className={Utils.cx(
          "dark-theme absolute z-40 top-0 left-0 right-0 bg-emphasis/95 backdrop-blur-md root-layout pt-nav-height pb-10 transition-all border-b border-outline opacity-0 pointer-events-none -translate-y-[4px]",
          {
            "opacity-100 pointer-events-auto translate-y-0": !!activeMenuId,
          }
        )}
        onTransitionEnd={(e) => {
          if (e.target !== e.currentTarget) return;
          if (e.propertyName !== "opacity") return;
          if (!activeMenuId) setLastActiveMenuId(null);
        }}
      >
        <Page.Container>
          <div className="flex flex-col gap-y-4">
            {visibleSubmenu?.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="w-fit relative group"
              >
                <div className="-z-10 absolute -top-1 -bottom-2 -left-4 -right-4 group-hover:bg-brand/15 blur-sm transition-colors rounded-xl"></div>
                <Text.Interface24
                  className={Utils.cx("text-foreground transition-colors", {
                    "text-[#fa3d41]": currentPath === item.href,
                  })}
                >
                  {item.label}
                </Text.Interface24>
                {item.subheading && (
                  <div className="mt-1">
                    <Text.Interface16
                      className={Utils.cx("text-muted", {
                        // "text-brand": currentPath === item.href,
                      })}
                    >
                      {item.subheading}
                    </Text.Interface16>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </Page.Container>
      </div>
    </nav>
  );
};

export default Nav;
