'use client';

import * as Button from '@/ui/button';
import * as Content from '@/lib/content';
import * as Graphics from '@/ui/graphics';
import * as Page from '@/ui/page';
import * as Paths from '@/lib/paths';
import * as React from 'react';
import * as Text from '@/ui/text';
import * as Utils from '@/lib/utils';
import * as Navigation from 'next/navigation';
import * as Types from '@/lib/types';

import Icon from '@/ui/icon';
import Link from 'next/link';

import { NavigationMenu } from '@base-ui-components/react/navigation-menu';

const Nav: React.FC = () => {
  const currentPath = Navigation.usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [lastMobileMenuOpen, setLastMobileMenuOpen] = React.useState(false);

  const [activeMenuId, setActiveMenuId] = React.useState<string | null>(null);
  const [lastActiveMenuId, setLastActiveMenuId] = React.useState<string | null>(null);

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
    const activeMenu = Content.NAVIGATION_MENU.find((item) => item.label === label);
    if (!activeMenu) return null;
    if (!('submenu' in activeMenu)) return null;
    return activeMenu;
  }, [activeMenuId, lastActiveMenuId]);

  const isMobileMenuVisible = isMobileMenuOpen || lastMobileMenuOpen;

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 h-nav-height grid grid-cols-subgrid col-span-full bg-linear-to-b from-background from-30% to-transparent"
      onMouseLeave={() => setActiveMenuId(null)}
    >
      {/* <DesktopNav
        currentPath={currentPath}
        visibleMenu={visibleMenu}
        activeMenuId={activeMenuId}
        onChangeActiveMenuId={setActiveMenuId}
        onChangeLastActiveMenuId={setLastActiveMenuId}
      /> */}
      <DesktopNavMenu
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

const DesktopNavMenu: React.FC<DesktopNavProps> = (props) => {
  return (
    <NavigationMenu.Root className="group/nav hidden lg:grid col-span-full grid-cols-subgrid">
      <Page.Container className="h-nav-height flex relative z-50 items-center gap-x-4 justify-between">
        <div className="flex items-center gap-2">
          <Link href={Paths.HOME} className="flex items-center gap-2.5 hover:opacity-70">
            <div className="h-[30px]">
              <Graphics.Logomark />
            </div>
            <div
              className={Utils.cx('h-[16px] transition-colors duration-50', {
                // 'text-white': !!props.visibleMenu,
              })}
            >
              <Graphics.Wordmark />
            </div>
          </Link>

          <NavigationMenu.List className="pl-3 xl:pl-8 flex items-center gap-x-6 xl:gap-x-8">
            {Content.NAVIGATION_MENU.map((item) => {
              const isPathActive = props.currentPath === item.href;
              const isMenuActive = props.visibleMenu?.label === item.label;

              const content = () => {
                return (
                  <div className="relative">
                    <div className="-z-10 absolute -top-1.5 left-0 right-0 flex justify-center">
                      <div
                        className={Utils.cx(
                          'h-[4px] w-[4px] bg-brand opacity-0 group-data-popup-open:opacity-100 transition-all rounded-full'
                        )}
                      ></div>
                    </div>
                    <Text.Interface16
                      className={Utils.cx(
                        'cursor-pointer text-foreground group-hover:opacity-70 group-hover/nav-link:text-brand transition-all duration-50 group-data-popup-open:text-brand',
                        {
                          'text-white': !!props.visibleMenu,
                          'text-brand': isPathActive || isMenuActive,
                        }
                      )}
                    >
                      {item.label}
                    </Text.Interface16>
                  </div>
                );
              };

              if ('submenu' in item) {
                return (
                  <NavigationMenu.Item key={item.label} className="list-none">
                    <NavigationMenu.Trigger className="group">{content()}</NavigationMenu.Trigger>
                    <NavigationMenu.Content className={contentClassName}>
                      <ul className="flex flex-col justify-center gap-y-4">
                        {item.submenu.map((item) => (
                          <li key={item.href} className="list-none">
                            <Link
                              key={item.label}
                              href={item.href}
                              className="w-fit relative group"
                            >
                              <div className="-z-10 absolute -top-1 -bottom-2 -left-4 -right-4 group-hover:bg-brand/15 blur-sm transition-colors rounded-xl"></div>
                              <Text.Interface24
                                className={Utils.cx('text-foreground transition-colors', {
                                  'text-[#fa3d41]': props.currentPath === item.href,
                                })}
                              >
                                {item.label}
                              </Text.Interface24>
                              {item.subheading && (
                                <div className="mt-1">
                                  <Text.Interface16 className={'text-muted'}>
                                    {item.subheading}
                                  </Text.Interface16>
                                </div>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                );
              }

              return (
                <Link key={item.label} href={item.href} className="group">
                  <Text.Interface16
                    className={Utils.cx(
                      'cursor-pointer text-foreground group-hover:opacity-70 group-hover/nav-link:text-brand transition-all duration-50',
                      {
                        // 'text-white': !!props.visibleMenu,
                        // 'text-brand': isPathActive || isMenuActive,
                      }
                    )}
                  >
                    {item.label}
                  </Text.Interface16>
                </Link>
              );
            })}
          </NavigationMenu.List>
          <NavigationMenu.Portal>
            <NavigationMenu.Positioner
              sideOffset={20}
              collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
              collisionAvoidance={{ side: 'none' }}
              className="box-border h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] transition-[top,left,right,bottom] duration-[var(--duration)] ease-[var(--easing)] before:absolute before:content-[''] data-[instant]:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5 data-[side=left]:before:top-0 data-[side=left]:before:right-[-10px] data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5 data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:left-[-10px] data-[side=right]:before:w-2.5 data-[side=top]:before:right-0 data-[side=top]:before:bottom-[-10px] data-[side=top]:before:left-0 data-[side=top]:before:h-2.5 z-100"
              style={{
                ['--duration' as string]: '0.35s',
                ['--easing' as string]: 'cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              <NavigationMenu.Popup className="data-[ending-style]:easing-[ease] relative h-[var(--popup-height)] origin-[var(--transform-origin)] rounded-lg bg-emphasis dark-theme transition-[opacity,transform,width,height,scale,translate] duration-[var(--duration)] ease-[var(--easing)] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[ending-style]:duration-150 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 w-[var(--popup-width)] xs:w-[var(--popup-width)]">
                <NavigationMenu.Arrow className="flex transition-[left] duration-[var(--duration)] ease-[var(--easing)] data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
                  <ArrowSvg />
                </NavigationMenu.Arrow>
                <NavigationMenu.Viewport className="relative h-full w-full overflow-hidden" />
              </NavigationMenu.Popup>
            </NavigationMenu.Positioner>
          </NavigationMenu.Portal>
        </div>
        <div>
          <Button.Primary href={Paths.CONTACT}>Get in touch</Button.Primary>
        </div>
      </Page.Container>
    </NavigationMenu.Root>
  );
};

const ArrowSvg = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-emphasis"
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className="fill-gray-200 dark:fill-none"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="dark:fill-gray-300"
      />
    </svg>
  );
};

const contentClassName =
  'h-full p-6 xs:w-max sm:min-w-[500px] xs:w-max ' +
  'transition-[opacity,transform,translate] duration-[var(--duration)] ease-[var(--easing)] ' +
  'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 ' +
  'data-[starting-style]:data-[activation-direction=left]:translate-x-[-50%] ' +
  'data-[starting-style]:data-[activation-direction=right]:translate-x-[50%] ' +
  'data-[ending-style]:data-[activation-direction=left]:translate-x-[50%] ' +
  'data-[ending-style]:data-[activation-direction=right]:translate-x-[-50%]';

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
          href={Paths.HOME}
          className="flex items-center gap-2.5 hover:opacity-70 transition-opacity"
        >
          <div className="h-[30px]">
            <Graphics.Logomark />
          </div>
          <div
            className={Utils.cx('h-[16px]', {
              'text-white': props.isMobileMenuOpen,
            })}
          >
            <Graphics.Wordmark />
          </div>
        </Link>
        <div className="flex items-center gap-x-8">
          <div className="hidden sm:block">
            <Button.Primary href={Paths.CONTACT}>Get in touch</Button.Primary>
          </div>
          <button
            type="button"
            className={Utils.cx(
              'w-[24px] h-[24px] text-muted cursor-pointer hover:opacity-70 transition-opacity',
              {
                'text-white': props.isMobileMenuOpen,
              }
            )}
            onClick={() => props.onChangeIsMobileMenuOpen(!props.isMobileMenuOpen)}
          >
            <Graphics.MenuIcon />
          </button>
        </div>
      </Page.Container>
      <div
        className={Utils.cx(
          'dark-theme absolute z-40 top-0 left-0 right-0 min-h-screen bg-emphasis/95 backdrop-blur-md root-layout pt-32 pb-10 transition-all border-y border-outline opacity-0 pointer-events-none -translate-y-[4px]',
          {
            'opacity-100 pointer-events-auto translate-y-0': props.isMobileMenuOpen,
          }
        )}
        onTransitionEnd={(e) => {
          if (e.target !== e.currentTarget) return;
          if (e.propertyName !== 'opacity') return;
          if (!props.isMobileMenuOpen) props.onChangeLastMobileMenuOpen(false);
        }}
      >
        <Page.Container>
          {props.visibleMenu && 'submenu' in props.visibleMenu && (
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
                    onCloseMobileMenu={() => props.onChangeIsMobileMenuOpen(false)}
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
                    onCloseMobileMenu={() => props.onChangeIsMobileMenuOpen(false)}
                  />
                );
              })}
            </div>
          )}
        </Page.Container>
        {/* <div className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-white">
          <div className="flex items-center gap-x-3">
            <Link
              href={Content.FACEBOOK_LINK}
              aria-label="Facebook"
              className="text-foreground hover:opacity-70 transition-opacity"
              target="_blank"
            >
              <Graphics.FacebookIcon />
            </Link>
            <Link
              href={Content.TWITTER_LINK}
              aria-label="Twitter"
              className="text-foreground hover:opacity-70 transition-opacity"
              target="_blank"
            >
              <Graphics.XLogo />
            </Link>
            <Link
              href={Content.LINKEDIN_LINK}
              aria-label="LinkedIn"
              className="text-foreground hover:opacity-70 transition-opacity"
              target="_blank"
            >
              <Graphics.LinkedInIcon />
            </Link>
          </div>
        </div> */}
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
        <div className="-z-10 absolute -top-1 -bottom-2 -left-4 -right-4 group-hover:bg-brand/15 blur-sm transition-colors rounded-xl"></div>
        <div className="-z-10 absolute -left-3 top-0 bottom-0 flex items-center">
          <div
            className={Utils.cx(
              'h-[4px] w-[4px] bg-brand opacity-0 group-hover:opacity-100 transition-all rounded-full'
            )}
          ></div>
        </div>
        <Text.Interface24
          className={Utils.cx(
            'cursor-pointer text-foreground group-hover:opacity-70 transition-all duration-50',
            {
              'text-white': !!props.visibleMenu,
              'text-brand': isPathActive || isMenuActive,
            }
          )}
        >
          {props.menuItem.label}
        </Text.Interface24>
        {'subheading' in props.menuItem && props.menuItem.subheading && (
          <div className="mt-1">
            <Text.Interface16 className={'text-muted'}>
              {props.menuItem.subheading}
            </Text.Interface16>
          </div>
        )}
      </div>
    );
  };

  if ('submenu' in props.menuItem) {
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
      <Page.Container className="h-nav-height flex relative z-50 items-center gap-x-4 justify-between">
        <div className="flex items-center gap-2">
          <Link href={Paths.HOME} className="flex items-center gap-2.5 hover:opacity-70">
            <div className="h-[30px]">
              <Graphics.Logomark />
            </div>
            <div
              className={Utils.cx('h-[16px] transition-colors duration-50', {
                'text-white': !!props.visibleMenu,
              })}
            >
              <Graphics.Wordmark />
            </div>
          </Link>
          <div className="pl-3 xl:pl-8 flex items-center gap-x-6 xl:gap-x-8">
            {Content.NAVIGATION_MENU.map((item) => {
              const isPathActive = props.currentPath === item.href;
              const isMenuActive = props.visibleMenu?.label === item.label;

              const content = () => {
                return (
                  <div className="relative">
                    <div className="-z-10 absolute -top-1.5 left-0 right-0 flex justify-center">
                      <div
                        className={Utils.cx(
                          'h-[4px] w-[4px] bg-brand opacity-0 group-hover/nav-link:opacity-100 transition-all rounded-full',
                          {
                            'opacity-100': isMenuActive,
                          }
                        )}
                      ></div>
                    </div>
                    <Text.Interface16
                      className={Utils.cx(
                        'cursor-pointer text-foreground group-hover:opacity-70 group-hover/nav-link:text-brand transition-all duration-50',
                        {
                          'text-white': !!props.visibleMenu,
                          'text-brand': isPathActive || isMenuActive,
                        }
                      )}
                    >
                      {item.label}
                    </Text.Interface16>
                  </div>
                );
              };

              if ('submenu' in item) {
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
                <Link key={item.label} href={item.href} className="group/nav-link">
                  <Text.Interface16
                    className={Utils.cx(
                      'cursor-pointer text-foreground group-hover:opacity-70 group-hover/nav-link:text-brand transition-all duration-50',
                      {
                        'text-white': !!props.visibleMenu,
                        'text-brand': isPathActive || isMenuActive,
                      }
                    )}
                  >
                    {item.label}
                  </Text.Interface16>
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <Button.Primary href={Paths.CONTACT}>Get in touch</Button.Primary>
        </div>
      </Page.Container>

      <div
        className={Utils.cx(
          'dark-theme absolute z-40 top-0 left-0 right-0 bg-emphasis/95 backdrop-blur-md root-layout pt-nav-height pb-10 transition-all border-y border-outline opacity-0 pointer-events-none -translate-y-[4px]',
          {
            'opacity-100 pointer-events-auto translate-y-0': !!props.activeMenuId,
          }
        )}
        onTransitionEnd={(e) => {
          if (e.target !== e.currentTarget) return;
          if (e.propertyName !== 'opacity') return;
          if (!props.activeMenuId) props.onChangeLastActiveMenuId(null);
        }}
      >
        <Page.Container>
          <div className="flex flex-col gap-y-4">
            {props.visibleMenu &&
              'submenu' in props.visibleMenu &&
              props.visibleMenu.submenu.map((item) => (
                <Link key={item.label} href={item.href} className="w-fit relative group">
                  <div className="-z-10 absolute -top-1 -bottom-2 -left-4 -right-4 group-hover:bg-brand/15 blur-sm transition-colors rounded-xl"></div>
                  <Text.Interface24
                    className={Utils.cx('text-foreground transition-colors', {
                      'text-[#fa3d41]': props.currentPath === item.href,
                    })}
                  >
                    {item.label}
                  </Text.Interface24>
                  {item.subheading && (
                    <div className="mt-1">
                      <Text.Interface16 className={'text-muted'}>
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
