"use client";

import * as Utils from "@/lib/utils";
import * as SectionComponents from "@/ui/sections";
import * as Types from "@/lib/types";
import * as Navigation from "next/navigation";
import * as Content from "@/lib/content";

export const RootLayout = (props: React.PropsWithChildren) => {
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
      className={Utils.cx("root-layout", {
        "gradient-light": !!theme?.lightGradientBg,
      })}
    >
      {props.children}
    </div>
  );
};

type ContainerProps = React.PropsWithChildren<{
  className?: string;
}>;

export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div className={Utils.cx("col-start-2 col-end-14", props.className)}>
      {props.children}
    </div>
  );
};

type SectionsProps = {
  page: Types.Page;
};

export const Sections: React.FC<SectionsProps> = (props) => {
  return (
    <div
      className={Utils.cx(
        "grid grid-cols-subgrid col-span-full",
        props.page.className
      )}
    >
      {props.page.sections.map((section, index) => {
        const SectionComponent =
          SectionComponents[section.type as keyof typeof SectionComponents];

        // @ts-expect-error - This is a valid type assertion
        return <SectionComponent key={index} section={section} />;
      })}
    </div>
  );
};
