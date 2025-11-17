"use client";

import * as Button from "@/ui/button";
import * as Content from "@/lib/content";
import * as Graphics from "@/ui/graphics";
import * as Page from "@/ui/page";
import * as React from "react";
import * as Text from "@/ui/text";
import * as Utils from "@/lib/utils";
import * as Navigation from "next/navigation";
import * as Types from "@/lib/types";

import Icon from "@/ui/icon";
import Link from "next/link";

const Nav: React.FC = () => {
  const currentPath = Navigation.usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [lastMobileMenuOpen, setLastMobileMenuOpen] = React.useState(false);

  const [activeMenuId, setActiveMenuId] = React.useState<string | null>(null);
  const [lastActiveMenuId, setLastActiveMenuId] = React.useState<string | null>(
    null
  );

  React.useEffect(() => {
    setActiveMenuId(null);
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  React.useEffect(() => {
    if (activeMenuId) setLastActiveMenuId(activeMenuId);
  }, [activeMenuId]);

  React.useEffect(() => {
    setLastMobileMenuOpen(isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setActiveMenuId(null);
      setLastActiveMenuId(null);
    }
  }, [isMobileMenuOpen]);

  const visibleMenu = React.useMemo(() => {
    const label = activeMenuId ?? lastActiveMenuId;
    if (!label) return null;
    const activeMenu = Content.NAVIGATION_MENU.find(
      (item) => item.label === label
    );
    if (!activeMenu) return null;
    if (!("submenu" in activeMenu)) return null;
    return activeMenu;
  }, [activeMenuId, lastActiveMenuId]);

  const isMobileMenuVisible = isMobileMenuOpen || lastMobileMenuOpen;

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 h-nav-height grid grid-cols-subgrid col-span-full"
      onMouseLeave={() => setActiveMenuId(null)}
    >
      <DesktopNav
        currentPath={currentPath}
        visibleMenu={visibleMenu}
        activeMenuId={activeMenuId}
        onChangeActiveMenuId={setActiveMenuId}
        onChangeLastActiveMenuId={setLastActiveMenuId}
      />
      <MobileNav
        currentPath={currentPath}
        visibleMenu={visibleMenu}
        onChangeIsMobileMenuOpen={setIsMobileMenuOpen}
        onChangeActiveMenuId={setActiveMenuId}
        onChangeLastActiveMenuId={setLastActiveMenuId}
        isMobileMenuOpen={isMobileMenuVisible}
        onChangeLastMobileMenuOpen={setLastMobileMenuOpen}
      />
    </nav>
  );
};

type MobileNavProps = {
  currentPath: string;
  visibleMenu: Types.MenuItem | null;
  onChangeActiveMenuId: (id: string | null) => void;
  onChangeLastActiveMenuId: (id: string | null) => void;
  onChangeIsMobileMenuOpen: (open: boolean) => void;
  onChangeLastMobileMenuOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
};

const MobileNav: React.FC<MobileNavProps> = (props) => {
  return (
    <>
      <Page.Container className="relative z-50 items-center justify-between flex lg:hidden">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <div className="h-[24px]">
            <Graphics.Logomark />
          </div>
          <div
            className={Utils.cx("h-[16px]", {
              "text-white": props.isMobileMenuOpen,
            })}
          >
            <Graphics.Wordmark />
          </div>
        </Link>
        <div className="flex items-center gap-x-8">
          <div className="hidden sm:block">
            <Button.Primary href="/contact">Get in touch</Button.Primary>
          </div>
          <button
            type="button"
            className={Utils.cx(
              "w-[24px] h-[24px] text-muted cursor-pointer hover:opacity-70 transition-opacity",
              {
                "text-white": props.isMobileMenuOpen,
              }
            )}
            onClick={() =>
              props.onChangeIsMobileMenuOpen(!props.isMobileMenuOpen)
            }
          >
            <Graphics.MenuIcon />
          </button>
        </div>
      </Page.Container>
      <div
        className={Utils.cx(
          "dark-theme absolute z-40 top-0 left-0 right-0 min-h-screen bg-emphasis/95 backdrop-blur-md root-layout pt-32 pb-10 transition-all border-b border-outline opacity-0 pointer-events-none -translate-y-[4px]",
          {
            "opacity-100 pointer-events-auto translate-y-0":
              props.isMobileMenuOpen,
          }
        )}
        onTransitionEnd={(e) => {
          if (e.target !== e.currentTarget) return;
          if (e.propertyName !== "opacity") return;
          if (!props.isMobileMenuOpen) props.onChangeLastMobileMenuOpen(false);
        }}
      >
        <Page.Container>
          {props.visibleMenu && "submenu" in props.visibleMenu && (
            <div>
              <button
                type="button"
                className="cursor-pointer group flex items-center gap-x-2 text-muted"
                onClick={() => {
                  props.onChangeActiveMenuId(null);
                  props.onChangeLastActiveMenuId(null);
                }}
              >
                <Icon size={20} icon="BackArrow" />
                <Text.Interface20 bold>Back</Text.Interface20>
              </button>
              <div className="mt-8 flex flex-col gap-y-8 items-start">
                {props.visibleMenu.submenu.map((item) => (
                  <MobileNavItem
                    key={item.label}
                    currentPath={props.currentPath}
                    visibleMenu={props.visibleMenu}
                    onChangeActiveMenuId={(id) => {
                      props.onChangeActiveMenuId(id);
                      props.onChangeLastActiveMenuId(id);
                    }}
                    menuItem={item}
                    onCloseMobileMenu={() =>
                      props.onChangeIsMobileMenuOpen(false)
                    }
                  />
                ))}
              </div>
            </div>
          )}
          {!props.visibleMenu && (
            <div className="flex flex-col gap-y-8 items-start">
              {Content.NAVIGATION_MENU.map((item) => {
                return (
                  <MobileNavItem
                    key={item.label}
                    currentPath={props.currentPath}
                    visibleMenu={props.visibleMenu}
                    onChangeActiveMenuId={(id) => {
                      props.onChangeActiveMenuId(id);
                      props.onChangeLastActiveMenuId(id);
                    }}
                    menuItem={item}
                    onCloseMobileMenu={() =>
                      props.onChangeIsMobileMenuOpen(false)
                    }
                  />
                );
              })}
            </div>
          )}
        </Page.Container>
      </div>
    </>
  );
};

type MobileNavItemProps = {
  currentPath: string;
  menuItem: Types.MenuItem | Types.SubmenuItem;
  visibleMenu: Types.MenuItem | null;
  onChangeActiveMenuId: (id: string | null) => void;
  onCloseMobileMenu: () => void;
};

const MobileNavItem: React.FC<MobileNavItemProps> = (props) => {
  const content = () => {
    const isPathActive = props.currentPath === props.menuItem.href;
    const isMenuActive = props.visibleMenu?.label === props.menuItem.label;

    return (
      <div className="relative">
        <div className="-z-10 absolute -left-3 top-0 bottom-0 flex items-center">
          <div
            className={Utils.cx(
              "h-[4px] w-[4px] bg-brand opacity-0 group-hover:opacity-100 transition-all rounded-full"
            )}
          ></div>
        </div>
        <Text.Interface24
          className={Utils.cx(
            "cursor-pointer text-foreground group-hover:opacity-70 transition-all duration-50",
            {
              "text-white": !!props.visibleMenu,
              "text-brand": isPathActive || isMenuActive,
            }
          )}
        >
          {props.menuItem.label}
        </Text.Interface24>
      </div>
    );
  };

  if ("submenu" in props.menuItem) {
    return (
      <button
        type="button"
        className="group inline-block"
        key={props.menuItem.label}
        onClick={() => props.onChangeActiveMenuId(props.menuItem.label)}
      >
        {content()}
      </button>
    );
  }

  return (
    <Link
      key={props.menuItem.label}
      href={props.menuItem.href}
      onClick={() => props.onCloseMobileMenu()}
      className="group"
    >
      {content()}
    </Link>
  );
};

type DesktopNavProps = {
  currentPath: string;
  visibleMenu: Types.MenuItem | null;
  activeMenuId: string | null;
  onChangeActiveMenuId: (id: string | null) => void;
  onChangeLastActiveMenuId: (id: string | null) => void;
};

const DesktopNav: React.FC<DesktopNavProps> = (props) => {
  return (
    <div className="hidden lg:grid col-span-full grid-cols-subgrid">
      <Page.Container className="flex relative z-50 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70">
            <div className="h-[24px]">
              <Graphics.Logomark />
            </div>
            <div
              className={Utils.cx("h-[16px] transition-colors duration-50", {
                "text-white": !!props.visibleMenu,
              })}
            >
              <Graphics.Wordmark />
            </div>
          </Link>
          <div className="pl-6 xl:pl-8 flex items-center gap-x-6 xl:gap-x-8">
            {Content.NAVIGATION_MENU.map((item) => {
              const content = () => {
                const isPathActive = props.currentPath === item.href;
                const isMenuActive = props.visibleMenu?.label === item.label;

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
                        "cursor-pointer text-foreground group-hover:opacity-70 group-hover/nav-link:text-brand transition-all duration-50",
                        {
                          "text-white": !!props.visibleMenu,
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
                    onClick={() => props.onChangeActiveMenuId(item.label)}
                    onMouseEnter={() => props.onChangeActiveMenuId(item.label)}
                  >
                    {content()}
                  </button>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => props.onChangeActiveMenuId(null)}
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
            "opacity-100 pointer-events-auto translate-y-0":
              !!props.activeMenuId,
          }
        )}
        onTransitionEnd={(e) => {
          if (e.target !== e.currentTarget) return;
          if (e.propertyName !== "opacity") return;
          if (!props.activeMenuId) props.onChangeLastActiveMenuId(null);
        }}
      >
        <Page.Container>
          <div className="flex flex-col gap-y-4">
            {props.visibleMenu &&
              "submenu" in props.visibleMenu &&
              props.visibleMenu.submenu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit relative group"
                >
                  <div className="-z-10 absolute -top-1 -bottom-2 -left-4 -right-4 group-hover:bg-brand/15 blur-sm transition-colors rounded-xl"></div>
                  <Text.Interface24
                    className={Utils.cx("text-foreground transition-colors", {
                      "text-[#fa3d41]": props.currentPath === item.href,
                    })}
                  >
                    {item.label}
                  </Text.Interface24>
                  {item.subheading && (
                    <div className="mt-1">
                      <Text.Interface16 className={"text-muted"}>
                        {item.subheading}
                      </Text.Interface16>
                    </div>
                  )}
                </Link>
              ))}
          </div>
        </Page.Container>
      </div>
    </div>
  );
};

export default Nav;
