import * as Utils from "@/lib/utils";
import * as SectionComponents from "@/ui/sections";
import * as Types from "@/lib/types";

export const RootLayout = (props: React.PropsWithChildren) => {
  return <div className="root-layout">{props.children}</div>;
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
      {props.page.sections.map((section) => {
        const SectionComponent =
          SectionComponents[section.type as keyof typeof SectionComponents];

        return <SectionComponent key={section.type} section={section} />;
      })}
    </div>
  );
};
