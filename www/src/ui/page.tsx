import * as Utils from '@/lib/utils';
import * as SectionComponents from '@/ui/sections';
import * as Types from '@/lib/types';

import RecentInsights from '@/ui/sections/recentInsights';

type ContainerProps = React.PropsWithChildren<{
  className?: string;
}>;

export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div className={Utils.cx('col-start-2 col-end-14', props.className)}>{props.children}</div>
  );
};

type SectionsProps = {
  page: Types.Page;
};

export const Sections: React.FC<SectionsProps> = (props) => {
  const allSections = {
    ...SectionComponents,
    RecentInsights,
  };

  return (
    <div
      className={Utils.cx(
        'sections-container grid grid-cols-subgrid col-span-full'
        // props.page.className
      )}
    >
      {props.page.sections.map((section, index) => {
        const SectionComponent = allSections[section.type as keyof typeof SectionComponents];

        // @ts-expect-error - This is a valid type assertion
        return <SectionComponent key={index} section={section} />;
      })}
    </div>
  );
};
