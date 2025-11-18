'use client';

import * as Utils from '@/lib/utils';
import * as Navigation from 'next/navigation';
import * as Content from '@/lib/content';

export const Root = (props: React.PropsWithChildren) => {
  const pathname = Navigation.usePathname();

  const getThemeForPage = () => {
    const page = Content.Pages.find((page) => page.path === pathname);
    if (!page) return null;
    if (!page.theme) return null;
    return page.theme;
  };

  const theme = getThemeForPage();

  return (
    <div
      className={Utils.cx('root-layout', {
        'gradient-light': !!theme?.lightGradientBg,
      })}
    >
      {props.children}
    </div>
  );
};
